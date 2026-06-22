// app/api/products/route.js
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || '';
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = 9;

  const query = {
    status: 'available',
    ...(search && { title: { $regex: search, $options: 'i' } }),
    ...(category && { category }),
  };

  const sortOption = sort === 'price_asc' ? { price: 1 } : sort === 'price_desc' ? { price: -1 } : { createdAt: -1 };

  const total = await Product.countDocuments(query);
  const products = await Product.find(query).sort(sortOption).skip((page - 1) * limit).limit(limit);

  return NextResponse.json({ products, total, pages: Math.ceil(total / limit) });
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'seller') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  await connectDB();
  const body = await request.json();
  const product = await Product.create({ ...body, sellerInfo: { userId: session.user.id, name: session.user.name, email: session.user.email } });
  return NextResponse.json(product, { status: 201 });
}
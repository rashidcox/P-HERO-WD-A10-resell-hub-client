export async function POST(request) {
  const body = await request.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return Response.json({
      message: "All fields are required",
    });
  }

  // Save to database here

  return Response.json({
    message: "Registration Successful",
  });
}
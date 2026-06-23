const stories = [
  {
    name: "Arif Hossain",
    text: "Sold my old laptop within 2 days. Very smooth experience!",
  },
  {
    name: "Nusrat Jahan",
    text: "Bought a sofa at half price. Quality was excellent!",
  },
  {
    name: "Imran Khan",
    text: "Best platform for second-hand buying in Bangladesh.",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-gray-900">
          Success Stories
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Real experiences from our happy users
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-600">"{story.text}"</p>
              <h4 className="mt-4 font-semibold text-blue-600">
                - {story.name}
              </h4>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
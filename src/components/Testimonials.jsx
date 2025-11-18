import React from 'react'

const reviews = [
  {
    id: 1,
    name: 'Aisha',
    text: 'Lovely cafe — the latte was perfect and the ambiance is calming.',
    avatar: 'https://i.ibb.co.com/Y45cFkGr/11.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rafi',
    text: 'Best cold brew in town. Friendly staff and quick service.',
    avatar: 'https://i.ibb.co.com/sd3YbSbW/10.jpg',
    rating: 4,
  },
  {
    id: 3,
    name: 'Mina',
    text: 'Cozy spot to work — reliable Wi-Fi and great pastries.',
    avatar: 'https://i.ibb.co.com/qb4nmXN/12.jpg',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-500">
          What Our Customers Say
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="font-semibold text-gray-800 dark:text-gray-100">
                  {r.name}
                </div>
              </div>
              <div className="mt-4 text-gray-600 dark:text-gray-300 italic text-sm">
                "{r.text}"
              </div>
              {/* Star rating */}
              <div className="mt-4 flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < r.rating
                        ? 'text-yellow-500'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.945c.3.922-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.196-1.539-1.118l1.285-3.945a1 1 0 00-.364-1.118L2.028 9.373c-.784-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.285-3.946z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

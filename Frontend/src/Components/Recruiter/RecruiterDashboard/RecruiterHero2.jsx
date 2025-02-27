import teacher1 from '../../../assets/images/nibinluke.jpg';
import teacher2 from '../../../assets/images/sajin.jpg';
import teacher3 from '../../../assets/images/noufal.jpg';
import teacher4 from '../../../assets/education/teacher4.jpg';

const teachers = [
  {
    name: 'Nibin Luke Mathew',
    position: 'Technical Director',
    image: teacher1,
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Mohammed Sajin',
    position: 'Chief Growth Officer',
    image: teacher2,
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Noufal',
    position: 'Chief Learning Officer',
    image: teacher3,
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Monshe Henderson',
    position: 'Science Teacher',
    image: teacher4,
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
];

const RecruiterHero2 = () => {
  return (
    <section className="bg-gray-100 py-16 ]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-custom text-3xl font-semibold text-gray-800">Meet Our Team</h2>
          <p className="text-gray-600 mt-2">
            Experts in their fields, each member of our team brings special value to our customers.
          </p>
        </div>

        {/* Teachers List - Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              {/* Teacher Image */}
              <div className="flex justify-center">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-24 h-24 rounded-full object-cover shadow-md"
                />
              </div>

              {/* Teacher Info */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{teacher.position}</p>
                <p className="text-gray-700 mt-4 text-sm">{teacher.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruiterHero2;

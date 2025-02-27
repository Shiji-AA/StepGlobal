import teacher1 from '../../../../assets/education/teacher1.jpg';
import teacher2 from '../../../../assets/education/teacher2.jpg';
import teacher3 from '../../../../assets/education/teacher3.jpg';
import teacher4 from '../../../../assets/education/teacher4.jpg';

const teachers = [
  {
    name: 'Bianca Wilson',
    position: 'Teacher',
    image: teacher1,
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Geethu Parker',
    position: 'English Teacher',
    image: teacher2,
    description: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Stella Smith',
    position: 'Art Teacher',
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

const EducationHero5 = () => {
  return (
    <section className="bg-light py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-5 pb-2">
          <h2 className="font-custom font-normal mb-4 text-3xl ">Certified Teachers</h2>
          <p className="font-custom font-normal text-gray-700">
            Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
          </p>
        </div>

        {/* Teachers List - Flex container */}
        <div className="flex justify-center gap-8 flex-wrap">
          {teachers.map((teacher, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Teacher Image */}
                <div className="img-wrap">
                  <div
                    className="img h-64 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${teacher.image})` }}
                  ></div>
                </div>

                {/* Teacher Info */}
                <div className="text-center py-6 px-4">
                  <h3 className="font-custom font-normal text-xl text-gray-800">{teacher.name}</h3>
                  <span className="font-custom font-normal text-sm text-gray-700">{teacher.position}</span>
                  <p className="font-custom font-normal text-gray-700 mt-2">{teacher.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationHero5;

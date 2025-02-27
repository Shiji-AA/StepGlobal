import img1 from '../../../../assets/education/edu1.jpg';
import img2 from '../../../../assets/education/edu2.jpg';
import img3 from '../../../../assets/education/edu1.jpg';
import img4 from '../../../../assets/education/edu4.jpg';

const services = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

const EducationHero7 = () => {
  return (
    <section className="w-screen bg-gray-100">
      <div className="container mx-auto max-w-full px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className=" text-white text-center shadow-lg flex flex-col items-center justify-center min-h-[300px]"
            >
              <img src={service.img} alt={`education-${service.id}`} className="w-full h-[300px] object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationHero7;

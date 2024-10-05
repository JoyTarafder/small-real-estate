import { ItemCard } from "./Cards";

export default function PropertiesSection() {
  return (
    <>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        <ItemCard
          homeName="Azure Haven Villa"
          price="3500"
          image="https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHx8fDA%3D"
        />
        <ItemCard
          homeName="Serene Sands Retreat"
          price="7100"
          image="https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"
        />
        <ItemCard
          homeName="Golden Horizon Villa"
          price="9500"
          image="https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?s=612x612&w=0&k=20&c=xkDBkqmCVvhR4idfybXRb-yFS0KqOjqtikg_LtO4pzs="
        />
        <ItemCard
          homeName="Celestial Cove"
          price="3800"
          image="https://t3.ftcdn.net/jpg/02/33/59/42/360_F_233594258_81s2Un5DEpmiHYxuOPAUfnrD0T9we5fd.jpg"
        />
        <ItemCard
          homeName="Whispering Pines Villa"
          price="4700"
          image="https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150762.jpg"
        />
        <ItemCard
          homeName="Tranquil Waters Estate"
          price="8900"
          image="https://static7.depositphotos.com/1000133/757/i/450/depositphotos_7576104-stock-photo-luxurious-villa.jpg"
        />
      </div>
    </>
  );
}


import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Pill from "../components/common/Pill";
import { FILTERS } from "../constants";
import {PROPERTYLISTINGSAMPLE} from "../constants";
import Card from "../components/common/Card"
import Button from "../components/common/Button"

export default function Home() {
  return (

   <>
      <Header />
      {/* Hero Section */}
        <section
          className="h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
          style={{ backgroundImage: `url('/assets/images/hero.jpg')` }}
          >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </section>
        {/* Hero Section */}


        {/* Filters Section */}
        <section className="flex flex-wrap gap-2 my-6">
          {FILTERS.map((filter) =>(
            <Pill key={filter} label ={filter}/>

          ))}
        </section>
        {/* Filters Section */}

        {/* Property Listing Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PROPERTYLISTINGSAMPLE.map((property, index) => (
              <Card
                key={index}
                image={property.image}
                name={property.name}
                price={property.price}
                rating={property.rating}
              />
            ))}
        </div>
        {/* Property Listing Section */}

        {/* CTA Button */}
        <section className="text-center my-8">
          <Button label="Book Now" onClick={() => alert('Button clicked!')} />
        </section>
        {/* CTA Button */}

        <Footer/>

    </>
   
       
       
      
         
       
      
        
  )
}


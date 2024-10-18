import bannerImage from '../assets/image.png'
import dishIcon from '../assets/dishicon.png'
import vector from '../assets/Vector.png'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import RecentOrder from '../components/RecentOrder';
import { dummyOrders,dishes } from '../components/data';
import { useContext, useEffect, useState } from 'react';
import ViewersChart from '../components/ViewersChart';
import ProfileDisplay from '../components/ProfileDisplay';
import { profileContext } from '../context/ProfileContext';
import PointChart from '../components/PointChart';
import CustomerChart from '../components/CustomerChart';

const Dashboard = () => {
  const {myProfile} = useContext(profileContext)
  const [myOrders, setMyOrders] = useState([])

  const totalOrders = myOrders.length

  const recentOrders = myOrders.slice(0, 3)

  const totalDishes = dishes.length

  useEffect(()=>{

    setMyOrders(dummyOrders
      .filter((items) => items.userid === 'user1'))
  }, [])

  const [restaurantName, setRestaurantName] = useState('');

  const handleProfileFetch = (name) => {
    setRestaurantName(name);
  };


  return (
    <div className="">
      <div className='flex w-full mb-8 items-center'>
        {/* Search */}
        <div className='relative flex flex-1 justify-center items-center ml-10'>
          <CiSearch className='pl-10 text-2xl text-n-n3' />
          <input type="text" className="w-3/4 bg-inherit border border-[#E2725B]/20 focus:outline-none focus:border-[#E2725B] px-12 p-3 rounded-3xl " placeholder='search' />
        </div>

        {/* Profile icon */}
        <UserModal />
      </div>

      {/* dasboard main */}
      <div className="grid grid-cols-3">

        {/* left side */}
        <div className="lg:col-span-2 col-span-3 ">

          {/* top banner */}
          <div className='w-full bg-white rounded-lg overflow-hidden'>
            <div className="grid grid-cols-2">
              <div className='flex flex-col m-auto gap-1 lg:gap-5 p-4 '>
                  <h1 className='text-black text-xl md:text-2xl text-center'>
                      Hi, {myProfile?.restuarantName}
                  </h1>
                  <p className='text-sm md:text-base lg:text-lg text-black text-center'>Welcome to <span className='text-[#E2725B]'>AfriBite</span></p>

              </div>
              <div className=' lg:h-56  flex'><img src={bannerImage} alt="" className="flex-1 lg:w-full" /></div>
            </div>
          </div>

          {/* Available dish and total orders */}
          <div className='grid grid-cols-2 gap-4 mt-4 '>

            <div className='relative bg-white rounded-lg p-4 '>
              <span className="absolute right-5 top-6 md:right-10 md:top-5 md:text-3xl text-n-n3"><IoIosArrowDropdown /></span>

              <p className="text-center my-2">Available Dish</p>

              <div className='w-full m-auto flex items-center px-2'>
                <img src={dishIcon} alt="" className="rounded-full bg-[#E2725B]/50 p-1 border-2 border-red-300 ml-5 h-10 md:h-full" />
                <div className='text-black/60 md:text-4xl font-semibold text-center flex-1 md:mr-14'>
                  {totalDishes}
                </div>
              </div>

              <div className="w-full flex my-2 md:my-4">
                <div className='px-2 py-1 rounded-2xl border-[#808000] bg-[#808000]/30 m-auto'>
                  <p className="">+ 10 New Add</p>
                </div>
              </div>

            </div>

            <div className='relative bg-white rounded-lg p-4'>

              <span className="absolute right-5 top-6 md:right-10 md:top-5 md:text-3xl text-n-n3"><IoIosArrowDropdown /></span>

              <p className="text-center my-2">Total Orders</p>

              <div className='w-full m-auto flex items-center px-2'>
                <img src={vector} alt="" className="rounded-full bg-yellow-200/50 p-1 border-2 border-yellow-200 h-10 md:h-full" />
                <div className='text-black/60 md:text-4xl font-semibold text-center flex-1 md:mr-12 '>
                  {totalOrders}
                </div>
              </div>


              <div className="w-full flex my-2 md:my-4">
                <div className='px-2 py-1 rounded-2xl border-[#808000] bg-[#808000]/30 m-auto'>
                  <p className="">+ 10 New Add</p>
                </div>
              </div>
            </div>

          </div>


        <div className='grid md:grid-cols-2 gap-4 mt-4 '>

          <div className="bg-white rounded-lg p-4"></div>
          <div className="bg-white rounded-lg p-4 h-36"><PointChart/></div>

          </div>

          <div className='grid md:grid-cols-2 gap-4 mt-4 '>

          <div className="bg-white rounded-lg p-4 h-80"> <ViewersChart/></div>
          <div className="bg-white rounded-lg p-4 h-60 md:h-80"><CustomerChart/></div>

          </div>


        </div>

        {/* right side */}
        <div className=" ml-6 hidden lg:block">

          {/* profile info display */}
          <UserProfile />

          {/* recent orders */}
          <div className="bg-white px-2 p-4 mt-4 flex flex-col gap-2 rounded-md">
            <h1 className="text-center text-l font-medium my-4 ">Recent Order</h1>
            {recentOrders.map((items, index) =>
              <RecentOrder key={index} image={items.dishImg} dish={items.mealname} price={items.price} date={items.date} status={items.status} />
            )}
          </div>

        </div>


      </div>
    </div>
  )
}

export default Dashboard
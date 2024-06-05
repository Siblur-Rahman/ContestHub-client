/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ContestCard from '../componets/ContestCard'
const AllContests = () => {
  const [contests, setContests] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/contests`)
      setContests(data)
    }
    getData()
  }, [])

  return (
    <Tabs>
      <div className=' container px-6 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
          Browse contests By Categories
        </h1>

        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
          Three categories available for the time being. They are Web
          Image Design, Article Writing and Marketing Strategy Marketing. Browse them by
          clicking on the tabs below.
        </p>
        <div className='flex items-center justify-center'>
          <TabList>
                <Tab >Image Design</Tab>
                <Tab >Article Writing</Tab>
                <Tab >Marketing Strategy</Tab>
                {/* <Tab >advertisement</Tab>
                <Tab >Gaming Review</Tab>
                <Tab >Business Idea</Tab>
                <Tab >Movie Review</Tab> */}
          </TabList>
        </div>
        <TabPanel>
          <div className='grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 w-full'>
            {contests
              .filter(j => j.category === 'Image Design')
              .map(contest => (
                <ContestCard key={contest._id} contest={contest} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 '>
            {contests
              .filter(j => j.category === 'Article Writing')
              .map(contest => (
                <ContestCard key={contest._id} contest={contest} />
              ))}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum culpa corrupti sunt laborum quae repellendus atque qui tempore nesciunt doloremque nulla facilis quos modi accusantium voluptates, velit voluptatum rem? Tenetur vel quaerat sed, ipsam et saepe, quam unde in expedita esse dolore pariatur, rem facilis alias magnam. Assumenda, impedit.
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 '>
            {contests
              .filter(j => j.category === 'Marketing Strategy')
              .map(contest => (
                <ContestCard key={contest._id} contest={contest} />
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default AllContests;

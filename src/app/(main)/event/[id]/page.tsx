import Image from 'next/image';
import CustomButton from '~/components/CustomButton';


function Page({ params }) {
  return (
    <div>
      <div className="flex flex-col justify-center gap-16 lg:flex-row w-screen  min-h-screen px-16 items-center">

        {/* leftbox */}
        <div className="flex flex-col gap-4 lg:w-[45%]">
          <div className="w-[13rem]">
            <CustomButton text="BACK" />
          </div>
          <div className='flex flex-col gap-2'><div className="font-rp1 text-white  text-4xl lg:text-7xl xl:text-[2.5vw]">
            ROBOWARS
          </div>
          <div className="h-5  text-xl lg:text-3xl font-rp1 flex items-center justify-start text-white xl:text-[1.8vw]">
            <span className='text-green-200 '>MODULE: </span>
            <span className="font-bold"> ROBOTRON</span>
          </div></div>
          <div className="flex items-center justify-center bg-red-500 lg:h-[80vh] w-[100%] lg:hidden rounded-3xl border-4 border-solid border-from-blue-400 via-blue-1600 to-blue-900">
            <Image
              src="/assets/modules/robowars.jpeg"
              alt="hello"
              height={300}
              width={480}
              className="object-contain w-full h-full rounded-3xl"
            />
          </div>
          <div className="w-full  text-justify text-white p-5 overflow-y-auto">
            <p className='text-[1.2rem]  lg:text-[1.3rem]  xl:text-[1.7vw]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
              voluptatum recusandae dolor cupiditate quasi labore corrupti amet dolorum,
              commodi velit laboriosam laborum repellendus totam. Commodi quis, sequi provident
              aperiam exercitationem ut sunt reprehenderit adipisci <br />nam tempora a nihil tenetur? Asperiores itaque
              cumque commodi reiciendis, modi nostrum aspernatur facere assumenda odio?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quia saepe voluptatum ad ratione delectus enim quas, dignissimos nulla odio asperiores,
              similique fugiat atque eum debitis dolorum repellat aliquid qui maiores cum a reprehenderit repudiandae?
              Culpa, temporibus nemo? Quis necessitatibus minus ducimus, inventore distinctio aspernatur provident eius
              facere accusamus incidunt placeat?
            </p>
          </div>


          <div className="w-[100%] lg:w-[60%] ">
            <CustomButton text="REGISTER" />

          </div>


        </div>


        <div className="hidden  lg:flex h-max w-[45%] rounded-3xl border-4 border-solid border-from-blue-400 via-blue-1600 to-blue-900 overflow-hidden xl:w-[38%] xl:self-center">
          <Image
            className="object-contain w-full h-full rounded-3xl"
            src="/assets/modules/robowars.jpeg"
            alt="hello"
            height={300}
            width={480}
          />
        </div>

      </div>
      {/* event_container_end */}
    </div>
  );
}

export default Page;

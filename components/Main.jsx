import Link from "next/link";

export const Main = () => {
  return (
    <div className="mx-2 my-7">
      <h3 className="text-2xl mx-2">Welcome to VBSPU</h3>
      <div className="border p-2 rounded-lg">
        <p className="mb-5 text-sm">
          Purvanchal University, Jaunpur renamed as Veer Bahadur Singh
          Purvanchal University (in the honour of late Shri Veer Bahadur Singh,
          former Chief Minister of the state), was established on 2nd October
          1987 as an affiliating university under U.P. state university act
          1973. Continuous qualitative and quantitative growth, excellence in
          academic and administrative activities, transparent and efficient
          academic administration have been some of the distinct characteristics
          on the basis of which the university emerged as one of the leading
          university of the country. Started with the 68 affiliated colleges,
          the university now has widened it&apos;s spectrum of activities with 367
          affiliated graduate and post-graduate colleges and students enrollment
          of nearly three lacs and eighty thousand in 5 Districts of Eastern
          Uttar Pradesh.
        </p>

        <p className="text-sm">
          The university is located at 10 km from the historic city of Jaunpur
          on Jaunpur-Shahganj road which divides it&apos;s 171.5 acres campus into
          two. Jaunpur is well connected by Rail, Road and Air ways with other
          States.The infrastructure development, achievement of academic
          excellence, quality assurance in the higher education and
          socio-economic development of this highly backward & rural region of
          Eastern Uttar Pradesh are some of the priority areas for which the
          university is putting its best efforts.
        </p>
        <Link href="http://www.vbspu.ac.in/vbspu/about-university/">
          <p className="text-sm text-blue-700 hover:bg-blue-700 hover:text-white cursor-pointer border rounded-full p-2 max-w-fit">
            {" "}
            read more{" "}
          </p>
        </Link>
      </div>
    </div>
  );
};

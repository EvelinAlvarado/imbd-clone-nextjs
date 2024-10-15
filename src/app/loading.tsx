import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      {/* <img className='h-52' src='spinner.svg' alt='loading...' /> */}
      <Image src="spinner.svg" height={52} width={52} alt="loading..." />
    </div>
  );
}

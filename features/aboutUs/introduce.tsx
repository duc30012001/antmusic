import Link from 'next/link';

type Props = {};

function Introduce({}: Props) {
  return (
    <div className="relative mb-10">
      <video
        loop
        autoPlay
        muted
        id="bg-video"
        className="min-h-[20rem] object-cover"
      >
        <source src={'/video.mp4'} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center">
        <h2 className="section-header mb-1 text-center text-4xl font-bold capitalize leading-tight">
          Release unlimited music everywhere
        </h2>
        <p className="text-center leading-loose">
          Start distributing your music for free and keep up to 100% of your
          sales royalties.
        </p>

        <Link href={'/contact'}>
          <button className="mb-2 mr-2 mt-10 rounded-lg bg-blue-700 px-5 py-2.5 font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Release your first single for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Introduce;

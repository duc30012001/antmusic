import { NavigateButton } from '@/components/ui';

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
      <div className="absolute bottom-2 left-2 right-2 top-2 flex flex-col items-center justify-center">
        <h2 className="section-header mb-1 text-center text-4xl font-bold capitalize leading-tight">
          Release unlimited music everywhere
        </h2>
        <p className="text-center leading-loose">
          Start distributing your music for free and keep up to 100% of your
          sales royalties.
        </p>

        <NavigateButton href="/contact" className="mt-10">
          Release your first single for free
        </NavigateButton>
      </div>
    </div>
  );
}

export default Introduce;

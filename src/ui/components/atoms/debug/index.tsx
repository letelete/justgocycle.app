import { DEBUG_MODE } from '~config/constants';

/* -------------------------------------------------------------------------------------------------
 * DebugTailwindIndicator
 * -----------------------------------------------------------------------------------------------*/

const DebugTailwindIndicator = () => {
  if (!DEBUG_MODE) {
    return null;
  }

  return (
    <div className='fixed bottom-2 left-2 z-50 flex items-center justify-center rounded-md border border-body-foreground bg-debug/50 p-1 text-xs text-debug-foreground backdrop-blur-md'>
      <div className='block sm:hidden'>xs</div>
      <div className='hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'>
        sm
      </div>
      <div className='hidden md:block lg:hidden xl:hidden 2xl:hidden'>md</div>
      <div className='hidden lg:block xl:hidden 2xl:hidden'>lg</div>
      <div className='hidden xl:block 2xl:hidden'>xl</div>
      <div className='hidden 2xl:block'>2xl</div>
    </div>
  );
};

/* -----------------------------------------------------------------------------------------------*/

export { DebugTailwindIndicator };

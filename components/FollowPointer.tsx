import stringToColor from '@/lib/stringToColor';
import { motion } from 'framer-motion'

function FollowPointer({
    x,y, info
}:{
    x: number;
    y: number;
    info: {
        name: string;
        email: string;
        avatar: string;
    }
}) {
    const color = stringToColor(info.email || "1");
  return (
    <motion.div className='h-4 w-4 rounded-full absolute z-50'
    style={{
        top:y,
        left:x,
        pointerEvents:'none',
    }}
    initial={{
        scale:1,
        opacity:1,
    }}
    animate={{
        scale:1,
        opacity:1
    }}
    exit={{
        scale:0,
        opacity:0
    }}
    >
    {/* <svg
    stroke={color}
    fill={color}
    strokeWidth="1"
    viewBox='0 0 16 16'
    className={`h-6 w-6 text-[${color}] transform -rotate-[70deg] -translate-x-12 -translate-y-[10px] stroke-[${color}]`}
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
     
    >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.55L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l7.25-7.25a.5.5 0 0 1 .55-.103z"></path>
    </svg> */}
    <svg width="2em" height="2em" viewBox="0 0 24 36" fill={color} className={`text-[${color}] transform `}>
      {/* <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="500%" y2="0%">
          <stop offset="0%" stopColor={color[0]} />
          <stop offset="100%" stopColor={color[1]} />
        </linearGradient>
      </defs> */}
      <path
        fill={color}
        d="M0.928548 2.18278C0.619075 1.37094 1.42087 0.577818 2.2293 0.896107L14.3863 5.68247C15.2271 6.0135 15.2325 7.20148 14.3947 7.54008L9.85984 9.373C9.61167 9.47331 9.41408 9.66891 9.31127 9.91604L7.43907 14.4165C7.09186 15.2511 5.90335 15.2333 5.58136 14.3886L0.928548 2.18278Z"
      />
    </svg>
      <motion.div
        style={{
            background:color,
        }}
        initial={{
            scale:0.5,
            opacity:0,
        }}
        animate={{
            scale:1,
            opacity:1
        }}
        exit={{
            scale:0.5,
            opacity:0
        }}
        className='px-2 py-2 bg-neutral-200 text-black font-bold whitespace-nowrap min-w-max text-xs rounded-full'
      >
        {info?.name || info.email}
      </motion.div>
      
    </motion.div>
  )
}

export default FollowPointer

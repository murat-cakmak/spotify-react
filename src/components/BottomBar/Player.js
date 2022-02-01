import { Icon } from "Icons.js";
import { Range } from 'react-range';
import { useState } from "react";
import { useAudio } from 'react-use';
import secondsToTime from "utils.js";

export default function Player() {
    const step = 0.1;
    const min = 0;
    const max = 100;
    const [ values, setValues ] = useState([50]);
    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    });

    return (
        <div className={"flex items-center justify-between px-4 h-full"}>
            <div className={"min-w-[11.26rem] w-[30%]"}>
                sol
            </div>
            <div className={"flex flex-col items-center max-w-[45.125] w-[40%]"}>
                <div className={"flex items-center gap-x-2 pb-3"}>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                        <Icon size={16} name="shuffle"></Icon>
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                        <Icon size={16} name="playerPrev"></Icon>
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]"}>
                        <Icon size={16} name="play"></Icon>
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                        <Icon size={16} name="playerNext"></Icon>
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                        <Icon size={16} name="repeat"></Icon>
                    </button>
                </div>
                <div className={"w-full flex items-center gap-x-2"}>
                    { audio }
                    <div className={"text-[0.68rem] text-white text-opacity-70"}>
                        00:00
                    </div>
                    <Range
                        step={step}
                        min={min}
                        max={max}
                        values={values}
                        className={"w-full h-7 flex"}
                        onChange={(values) => setValues( values )}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                className={"rounded-md"}
                                style={{
                                    ...props.style,
                                    height: '6px',
                                    width: '100%',
                                    backgroundColor: '#1db954'
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div
                                {...props}
                                className={"h-3 w-3 rounded-full bg-white"}
                                style={{
                                    ...props.style,
                                    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 50%)",
                                }}
                            />
                        )}
                    />
                    <div className={"text-[0.68rem] text-white text-opacity-70"}>
                        { secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className={"min-w-[11.26rem] w-[30%] flex justify-end"}>
                sağ
            </div>
        </div>
    )
}

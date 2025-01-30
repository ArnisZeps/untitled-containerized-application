import IInformativeTimestamp from "./IInformativeTimestamp";

interface IVideoPlayerProps {
    src: string;
    informativeTimestamps?: IInformativeTimestamp[];
}

export default IVideoPlayerProps;
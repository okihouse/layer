import { FunctionComponent, ReactNode, useEffect } from "react"
import { LandingModel } from "../model/LandingModel"

interface IProps {
    item?: LandingModel.ILandingItemModel
    children?: ReactNode
}

export const LandingVideoContent: FunctionComponent<IProps> = (props) => {
    const { item, children } = props

    useEffect(() => {
        const videos = document.querySelectorAll("video")
        if (videos?.length > 0) {
            videos?.forEach(v => {
                v.setAttribute("webkit-playsinline", "true")
            })
        }
    }, [])

    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            >
                <source src={item?.video?.url} />
            </video>
            {children}
        </>
    )
}
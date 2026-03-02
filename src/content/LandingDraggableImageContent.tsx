import React, { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react"
import { LandingModel } from "../model/LandingModel"

interface IProps {
    item?: LandingModel.ILandingItemModel
    children?: ReactNode
}

export const LandingDraggableImageContent: FunctionComponent<IProps> = (props) => {
    const { item, children } = props
    const containerRef = useRef<HTMLDivElement>(null)

    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)

    const handleDimension = () => {
        if ((containerRef?.current?.clientWidth ?? 0) > 0 && (item?.image?.draggable?.y ?? 0) > 0) {
            setWidth(containerRef?.current?.clientWidth ?? 0)
        }

        if ((containerRef?.current?.clientHeight ?? 0) > 0) {
            setHeight(containerRef?.current?.clientHeight ?? 0)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', function () {
            handleDimension()
        })

        setTimeout(handleDimension, 100)
    }, [])

    return (
        <div ref={containerRef} style={{ position: "relative", }}>
            <img
                src={item?.image?.url}
                alt={'이미지'}
                style={{ width: '100%' }}
            />
            {item?.image?.draggable && width > 0 && height > 0 && (
                (() => {
                    const imageWidth = (item?.image?.draggable.width ?? 0) * width / 375

                    return (
                        <img
                            src={item?.image?.draggable?.url}
                            style={{
                                maxWidth: imageWidth,
                                height: 'auto',
                                position: "absolute",
                                width: '100%',
                                left: item.image.draggable.x == 0 ? 0 : Math.round((width * item.image.draggable.x) / 375),
                                top: item.image.draggable.y == 0 ? 0 : Math.round((width * item.image.draggable.y) / 375),
                                zIndex: 10,
                            }}
                        />
                    )
                })()
            )}
            {children}
        </div>
    )
}
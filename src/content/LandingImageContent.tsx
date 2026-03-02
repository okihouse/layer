import React, { FunctionComponent, ReactNode, useEffect } from "react"
import { LandingModel } from "../model/LandingModel"

interface IProps {
    item?: LandingModel.ILandingItemModel
    children?: ReactNode
}

export const LandingImageContent: FunctionComponent<IProps> = (props) => {
    const { item, children } = props

    useEffect(() => {
    }, [])

    return (
        <>
            <img
                src={item?.image?.url}
                alt={'이미지'}
                style={{ width: '100%' }}
            />
            {children}
        </>
    )
}
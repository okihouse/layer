import { Button } from 'antd'
import React, { FunctionComponent, ReactNode, useEffect } from "react"
import { LandingModel } from '../model/LandingModel'
import { LandingButtonType } from '../type/LandingButtonType'

interface IProps {
    item: LandingModel.ILandingItemModel
    children?: ReactNode
    onSubmit?: () => void
}

export const LandingFormButtonContent: FunctionComponent<IProps> = (props) => {
    const { item, children, onSubmit } = props

    useEffect(() => {
    }, [])

    return (
        <>
            {item?.button?.type == LandingButtonType.default && (
                <Button
                    block
                    type='primary'
                    size='large'
                    style={{ boxShadow: 'none', height: 52, }}
                    onClick={onSubmit}
                >
                    {item?.button?.name ?? '문의하기'}
                </Button>
            )}
            {item?.button?.type == LandingButtonType.image && (
                <img
                    src={item?.button?.image}
                    width={'100%'}
                    alt='버튼'
                    style={{
                        borderRadius: 6,
                        border: "1px solid #F2F3F4",
                        objectFit: 'cover',
                        cursor: 'pointer'
                    }}
                    onClick={onSubmit}
                />
            )}
            {children}
        </>
    )
}
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { openInterestsModal, setToggle } from "../features/toggleSlice"

export default function SettingsInterest() {
    const dispatch = useDispatch()
    const modal = useSelector(setToggle)
    const [confirmation, setConfirmation] = useState('')
    const openModal = () => {
        console.log('modal opening')
        dispatch(openInterestsModal())
    }
    return (
        <div>
            <button class="btn btn-light" style={{width: '12rem'}} onClick={openModal}>Set New Interest</button>
            <span>{confirmation}</span>
        </div>
    )
}
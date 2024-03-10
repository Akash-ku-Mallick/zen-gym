import './style.css';

import { motion } from "framer-motion"


const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            ease: 'easeOut',
            duration: 0.1
        }
    },
    hover2: {
        x: 10,
        transition: {
            ease: 'easeOut',
            duration: 0.1
        }
    },
    tap: {
        scale: 0.9,
    },
  }

const FilledButton = (props) => {

    return (
        <motion.div
        className='filled-btn filled-one'
        whileTap="tap"
        whileHover="hover"
        variants={buttonVariants}
        style={{marginLeft: props.ml ? props.ml : 0,
            marginTop: props.mt ? props.mt : 0, 
            marginRight: props.mr ? props.mr : 0, 
            marginBottom: props.mb ? props.mb : 0}}
        >
            <Outline />
            <span>{props.text}</span>
        </motion.div>
    )
}

const FilledButton2 = (props) => {

    return (
        <motion.div
        className='filled-btn filled-two'
        whileTap="tap"
        whileHover="hover2"
        variants={buttonVariants}
        style={{marginLeft: props.ml ? props.ml : 0,
            marginTop: props.mt ? props.mt : 0, 
            marginRight: props.mr ? props.mr : 0, 
            marginBottom: props.mb ? props.mb : 0}}
        >
            <Outline />
            <span>{props.text}</span>
        </motion.div>
    )
}

const OutlinedButton = (props) => {

    return (
        <motion.div className='outline-btn'
        whileTap="tap"
        whileHover="hover"
        variants={buttonVariants}
        >
            <Outline />
            <span>{props.text}</span>
        </motion.div>
    )
}


const OutlinedButton2 = (props) => {

    return (
        <motion.div className='outline-btn outline-btn2'
        whileTap="tap"
        whileHover="hover"
        variants={buttonVariants}
        >
            <Outline />
            <span>{props.text}</span>
        </motion.div>
    )
}

const Outline = () => {
    return (
        <svg width="1543" height="408" viewBox="0 0 1543 408" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.03827 76.5182C-4.4617 29.5181 30.5383 10.3515 48.0383 6.01819C472.705 3.85153 1328.14 0.218192 1352.54 3.01819C1387.54 3.01819 1399.37 27.1849 1407.54 37.5182L1539.54 335.518C1547.14 385.118 1506.37 402.518 1485.04 405.018H180.538C144.538 402.618 128.538 379.018 125.038 367.518L3.03827 76.5182Z" stroke="white" stroke-width="4"/>
</svg>
    )
}
export { FilledButton, OutlinedButton, OutlinedButton2, FilledButton2 }
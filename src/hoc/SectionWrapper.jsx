import { motion } from 'framer-motion'
import { styles } from "../styles"
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section
        variants = {staggerContainer}
        initial="hidden"
        whileInView="show"
        // Trigger once any part of the section is 100px into the viewport.
        // A fractional `amount` can never be reached on mobile when the
        // section is taller than ~4x the screen (e.g. the Projects list).
        viewport={{ once: true, amount: "some", margin: "0px 0px -100px 0px" }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span'
            id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper
import { useEffect, useState } from 'react'
import Card from '@components/Card/Card'
import styles from './Home.module.scss'
import { IData } from '@utils/types'
import getDataAction from '@utils/getDataAction'

const Home = () => {
    const [data, setData] = useState<IData[]>([])

    useEffect(() => {
        (async () => {
            const response: IData[] = await getDataAction()
            setData(response)
        })()
    }, [])


    return (
        <section className={styles.homePage}>
            {data.map((card: IData, index: number) => {
                return <Card key={index} {...card} isInModal={false}/>
            })}
        </section>
    )
}

export default Home
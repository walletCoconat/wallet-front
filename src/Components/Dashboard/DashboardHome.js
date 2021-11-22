import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTransactions, fetchStatistic, addTransaction } from '../../redux/finance/financeOperations'
import TotalBalance from '../TotalBalance/index'
import HomeTab from '../HomeTab/index'
import MobileTab from '../HomeTab/index'
import './Dashboard.scss';
import Media from 'react-media';
import MainInfo from './Dashboard_main_info';
import ButtonAddTransaction from '../ButtonAddTransaction';

// const uixdata = new Date("2021.11.10").getTime();

// const newTransaction = {
//     type: false,
//     category: 'education',
//     sum: 500,
//     date: uixdata,
// }

const Home = () => {
    const dispatch = useDispatch()

    // useEffect(() => dispatch(fetchTransactions()), []);
    // useEffect(() => dispatch(addTransaction(newTransaction)), []);
    // useEffect(() => dispatch(fetchStatistic()), []);
    // console.log('data-UNIX', newTransaction.date)
    // console.log('data-UNIX', uixdata)

    return (
    <div >
        <Media queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px)",
        }}>

            {matches => (
                <div>
                    {/* For mobile screen */}
                    {matches.small &&
                        <>
                            <div className='Dashboard_balance'> <TotalBalance /> </div>
                            <div className='Dashboard_table'> <MobileTab/> </div>
                        </>}

                    {/* For tablet screen*/}
                    {matches.medium &&
                        <div className='home_container'>
                            <MainInfo />
                            <div className='Dashboard_table'> <HomeTab /> </div>
                            <ButtonAddTransaction />
                        </div>
                    }
                </div>
            )}
        </Media>
        </div>
    )
}

export default Home;


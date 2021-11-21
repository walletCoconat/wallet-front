import Media from 'react-media';
import MainInfo from './Dashboard_main_info';


const Statistics = () => 
<>
    <div >
    <Media queries={{
        small: "(max-width: 767px)",
        medium: "(min-width: 768px)",
        }}>

        {matches => 
            (<div>
            {/* For mobile screen */}
            {matches.small && 
                <div className='Dashboard_stats'>
    
                    <h1 className='Dashboard_stats'>Статистика</h1>
                    <div className='Dashboard_stats'>
                        <div className='Dashboard_stats_diagram'> STATISTICS DIAGRAM </div>
                        <div className='Dashboard_stats_table'> STATISTICS TABLE </div>
                    </div>
                </div>
            }

            {/* For tablet screen*/}
            {matches.medium &&         
                <div className='home_container'>
                    <MainInfo/> 
                    <div  className='Dashboard_stats_container'>
                        <h1 className='Dashboard_stats_title'>Статистика</h1>
                        <div className='Dashboard_stats'>
                            <div className='Dashboard_stats_diagram'> STATISTICS DIAGRAM </div>
                            <div className='Dashboard_stats_table'> STATISTICS TABLE </div>
                        </div>
                    </div>
                </div>
            }

            </div>
        )}
    </Media> 

</div>
</>


export default Statistics;

  

import './App.css';
import { IconDots } from './Icons';
import factory from './img/factory.jpg';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full bg-gray-200 space-y-16'>
      <div className='text-blue-800 text-2xl font-bold'>Value & Missions</div>
      <div className='container '>
        <div className='flex flex-row  justify-between w-full px-20 items-center '>
          <div className=' w-1/2'>
            <Collapse>
              <Panel header='Leadership' className='text-2xl'>
                <p className='text-xl text-blue-800'>{text}</p>
              </Panel>
              <Panel header='Commitment' className='text-2xl'>
                <p className='text-xl text-blue-800'>{text}</p>
              </Panel>
              <Panel header='Excellence' className='text-2xl'>
                <p className='text-xl text-blue-800'>{text}</p>
              </Panel>
              <Panel header='Loyalty' className='text-2xl'>
                <p className='text-xl text-blue-800'>{text}</p>
              </Panel>
              <Panel header='Solidarity' className='text-2xl'>
                <p className='text-xl text-blue-800'>{text}</p>
              </Panel>
            </Collapse>
          </div>

          <div className='flex flex-row relative'>
            <div className='text-gray-300 absolute '>
              <IconDots />
            </div>
            <img
              className='h-96 w-72 rounded-l-3xl z-50'
              src={factory}
              alt='...factory'
            />
            <div className='text-gray-300 absolute right-7 '>
              <IconDots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

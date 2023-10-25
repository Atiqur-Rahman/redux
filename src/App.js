import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Stat from './components/Stat';

const initialValue = [
    {
        id: 1,
        count: 0,
    },
    {
        id: 2,
        count: 0,
    },
    {
        id: 3,
        count: 0,
    },
];

function App() {
    const [state, setState] = useState(initialValue);

    const totalCount = () => {
        return state.reduce((total, counter) => total + counter.count, 0);
    };

    const increment = (id) => {
        const updatedCount = state.map((c) => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count + 1,
                };
            }
            return { ...c };
        });
        setState(updatedCount);
    };

    const decrement = (id) => {
        const updatedCount = state.map((c) => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count - 1,
                };
            }
            return { ...c };
        });
        setState(updatedCount);
    };

    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h1>
            <div className="max-w-md mx-auto mt-10 space-y-5">
                {state.map((count) => (
                    <Counter key={count.id} id={count.id} count={count.count} increment={increment} decrement={decrement} />
                ))}

                <Stat count={totalCount()} />
            </div>
        </div>
    );
}

export default App;

import { useState, useEffect } from 'react';
import ModalDefault from '../modal/modalDefault';
import { Wheel } from 'react-custom-roulette';

export default function DeterminationRoll({ isShowModal, setIsShowModal }) {
  const [mustSpin, setMustSpin] = useState(false);
  const data = [
    { option: '0', style: { backgroundColor: '#db7093', textColor: 'black' } },
    { option: '1', style: { backgroundColor: '#20b2aa' } },
    { option: '2', style: { backgroundColor: '#d63e92', textColor: 'black' } },
    { option: '3', style: { backgroundColor: '#daa520', textColor: 'black' } },
    { option: '4', style: { backgroundColor: '#ff340f', textColor: 'black' } },
    { option: '5', style: { backgroundColor: '#ff7f50', textColor: 'black' } },
  ];

  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isSpinerRun, setIsSpinerRun] = useState(false);

  useEffect(() => {
    setIsSpinerRun(true);
  }, []);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = 2;
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <ModalDefault
      closeIconClassName="w-8 h-8 fill-red-400"
      isShowModal={isShowModal}
      setIsShowModal={setIsShowModal}
    >
      <div className="w-full h-max overflow-y-hidden p-2 overflow-x-hidden sm:text-lg text-zinc-500 flex items-center justify-center">
        {typeof window !== 'undefined' && isSpinerRun && (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
        )}
        <button onClick={handleSpinClick}>SPIN</button>
      </div>
    </ModalDefault>
  );
}
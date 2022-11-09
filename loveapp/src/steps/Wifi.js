export function Wifi ({setStep}) {

    return (
        <>
            <p>Desligue o wi-fi e continue apenas com os dados móveis</p>
            <button className='button' onClick={() => {setStep(2)}}>Já desativei, minha vida</button>
        </>
    )
}
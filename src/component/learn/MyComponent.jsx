import './style.css'

const MyComponent = () => {
    const hoiDanIT = 'eric';
    //khong hiem thi cac kieu du lieu sao:
    //null
    //boolean
    //undefined

    //array [1,2,3] sẽ thành 123
    //object: lỗi (object is not react child)
    return (
        <>
            <div>{hoiDanIT} $ hoidanIT</div>
        </>
    );
}

const MyComponent2 = () => {
    return (
      <>
        <div>
            LÊ TRƯỜNG GIANG
        </div>
      </>
    );
}

export {MyComponent, MyComponent2};
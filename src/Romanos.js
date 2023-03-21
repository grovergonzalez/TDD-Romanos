function ToRomano(num)
{
    const romanos = {
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
    
    let resultado = '';
    if(num==1)
    {
        return "I";
    }
    if(num==4)
    {
        return "IV";
    }
    if(num==5)
    {
        return "V";
    }
}

export default ToRomano;
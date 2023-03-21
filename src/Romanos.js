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
    for (let letra in romanos) 
    {
        while (num >= romanos[letra]) 
        {
          resultado += letra;
          num -= romanos[letra];
        }
    }
    return resultado;
}

export default ToRomano;
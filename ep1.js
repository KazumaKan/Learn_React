// Block Scope (let/constant)
    // -Block Scope คือ บริเวณที่เราสามารถเข้าถึงตัวแปรได้

    /* 
        ver vs let
        -ver คือ การใช้งานตัวแปลได้ทั้ง Program
        -let คือ การใช้งานตัวแปรเฉพาะใน block ที่ประกาศไว้ เช่น if, for หรือ {}
    */
    // Example
    // var
    var a = 10
    var b = 20
    if (a == 10) {
        var b = 30
        console.log("b (function if) = " +b);
    }
    console.log("b = " +b +"\n");

    // let
    let c = 10
    let d = 20
    if (c == 10) {
        let d = 30
        console.log("d (function if) = " +d);
    }
    console.log("d = " +d +"\n");

document.getElementById("button").onclick = function () { calculate() };

        function calculate() {
            var amount = document.getElementById("bill-amount").value;
            var percentage = document.getElementById("disc-percentage").value;

            var discount = amount * (percentage / 100);

            var discAmount = amount - discount;
            // console.log("Discount amount is:", discAmount );

            document.getElementById("result").innerHTML = discAmount;
        }
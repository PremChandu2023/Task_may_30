interface OrderItem {
    sno : number;
    item : Menuitem;
    Quantity : number;
}

interface OrderForm {
    addOrder(orderNo : number, orderItem : Menuitem, orderQuantity : number ) : void
    removeOrder(index : number);
    getOrdersList() : OrderItem[];
    getOrderPrice() : void ;
}
class OrderForm  {
    private orderItems : OrderItem[]= [];
    addOrder(orderNo: number, orderItem: Menuitem, orderQuantity: number): void {
        const newOrder = {
            sno : orderNo,
            item:orderItem,
            Quantity : orderQuantity
        }

        this.orderItems.push(newOrder);
    }
    removeOrder(index : number) {
        if(index > 0 && index < this.orderItems.length)
        {
            this.orderItems.splice(index-1,1)
        }
        else{
                alert("give index in invalid")
        }  
    }
    getOrdersList(): OrderItem[] {
        return this.orderItems;
    }
    getOrderPrice(): void {

        let amount =0;
        for (const orders of this.orderItems) {

            orders.Quantity* orders.item.price;
            
        }
        console.log(amount);
        
    }

}

const order1 = new OrderForm();
const menuitem1=new Menuitem(1,"Burger", "Delicious beef burger", 10.9)

order1.addOrder(1,menuitem1,3);

order1.getOrderPrice();

export{}
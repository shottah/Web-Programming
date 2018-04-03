import {User} from './User'
export class Vendor extends User {
    vendor_name: string;
    vendor_type: string;
    owner_name: string;
    products: string[];
    constructor (email: string, password: string, v_name:string, o_name:string) {
        super(email, password);
        this.vendor_name = v_name;
        this.owner_name = o_name;
        this.vendor_type = "";
        this.products = [];
    }

    addProduct (item: string) {
        let j = Object.keys(this.products).length;
        this.products.splice(j, 0, item);
        this.products.sort();
    }

    setVendorType (type: string) {
        this.vendor_type = type;
    }
}

// let v = new Vendor('none', 'none', 'none', 'none', []);

// v.addProduct ('item1');
// v.addProduct ('cat2');

// console.log(v.products);
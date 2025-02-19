import React, {Component} from 'react';
import {Button, Divider} from "antd";

class BasketList extends Component {
    render() {
        return (
            <div>
                <div className="flex items-center">

                    <div className="size-[100px] bg-black"></div>
                    <div>
                        <p>Product name</p>
                        <span>Brand</span>
                    </div>
                    <div>
                        $200
                    </div>
                    <div className="flex items-center justify-between px-5 border rounded-xs w-40 h-10">
                        <p>Count</p>
                        <button>{"<"}</button>
                        <span>2</span>
                        <button>{">"}</button>
                    </div>
                    <div>
                        <p>$400</p>
                    </div>
                    <Button variant="solid" color="danger">Delete</Button>
                </div>
                <Divider />
            </div>
        );
    }
}

BasketList.propTypes = {};

export default BasketList;
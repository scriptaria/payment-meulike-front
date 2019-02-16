import { ISwitch } from "./switch";

export interface ISwitchMade {
    created_datetime: string;
    id: string;
    status?: number;
    switch: string;
    user_data: string;
    voucher: string;
    exchange?: ISwitch;
    _body: any;
}

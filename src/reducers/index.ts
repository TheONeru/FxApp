import {
    GET_DATA_FAILURE,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
 } from '../constants/ActionTypes';

export type TradeState = {
    id : number;
    instrument : string;
    pricing : number;
    rate : number;
    units : number;
    PL : number;
    ratio : number;
    pips : number;
    side : string;
};

export type HeaderState = {
    NAV : number; // 総資産
    balance : number; // 有効証拠金
    unrealizedPL : number; // 未確定損益
};

export type State = {
    isFetching :boolean;
    header : HeaderState;
    trades : TradeState[];
};

const initialState:State = {
    isFetching : false,
    header : {
        NAV : 0,
        balance :0,
        unrealizedPL : 0,
    },
    trades : [],
};

// On Request Action, state extends one before state header and trades
export const rootReducer = (state= [initialState], action:any) => {
    switch (action.type) {
    case GET_DATA_REQUEST:
        const length = state.length;
        return ([
            ...state,
            {
                isFetching : true,
                header : state[length - 1].header,
                trades : state[length - 1].trades,
            },
        ]);

    case GET_DATA_SUCCESS:
        return([
            ...state,
            {
                isFetching : false,
                header : {
                    NAV : action.ret.account.NAV,
                    balance :action.ret.account.balance,
                    unrealizedPL : action.ret.account.unrealizedPL,
                },
                trades : action.ret.account.trades.map((trade:any, index:number) => {
                    const price = Number(trade.price);
                    const units = Math.abs(Number(trade.currentUnits));
                    const diff = Number(trade.unrealizedPL) / units;
                    const PL = Math.round(
                        (Number(trade.unrealizedPL) - 0.004 * units) * 1000) / 1000;
                    const pips = Math.round((PL / units * 100) * 1000) / 1000;
                    const ratio = Math.round(PL / price * 1000) / 1000;
                    const side = Number(trade.currentUnits) < 0 ? 'sell' : 'buy';
                    return({
                        PL,
                        side,
                        ratio,
                        pips,
                        pricing : price,
                        units : Number(trade.currentUnits),
                        id: index,
                        instrument : trade.instrument,
                        rate : Math.round((price - diff) * 1000) / 1000,
                    } as TradeState);
                }),
            },
        ]);

    case GET_DATA_FAILURE:
        return([
            ...state,
            {
                isFetching : true,
                header : {
                    NAV : 0,
                    balance :0,
                    unrealizedPL : 0,
                },
                trades : [],
            },
        ]);

    default:
        return state;
    }
};

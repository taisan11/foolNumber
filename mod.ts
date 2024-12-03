export interface FoolNumDic {
  mode?:{
    /**
     * @default false
     */
    string?: boolean;
    /**
     * @default false
     */
    bigData?:boolean
  }
  data:{[index: number|string]: boolean;}
}
export interface CreateFoolNumDicConfig {
  maxNum?: number;
  minNum?: number;
  list?:string[];
  mode?:{
    string?: boolean;
    bigData?:boolean
  }
}
interface NoNullDic extends FoolNumDic {
  mode: Required<NonNullable<FoolNumDic["mode"]>>;
}

export function CreateFoolNumDic(func:(x:number|string)=>boolean, config?: CreateFoolNumDicConfig): NoNullDic {
  const { maxNum: _maxNum, minNum: _minNum, list: _list, mode: _mode } = config || {};
  const dic:NoNullDic = {data:{},mode:{string:false,bigData:false}};
  const maxNum = _maxNum !== undefined ? _maxNum : 1000;
  const minNum = _minNum !== undefined ? _minNum : 0;
  const list:string[]|number[] = _list ?? Array.from({ length: maxNum - minNum + 1 }, (_, i) => i + minNum);
  const mode = {string:_mode?.string ?? false,bigData:_mode?.bigData ?? false};
  dic.mode = mode;
  if (dic.mode.bigData) {
    list.forEach((n) => {
      dic.data[n] = func(n);
    })
  }
  for(let i = minNum; i <= maxNum; i++){
    dic.data[list[i]] = func(list[i]);
  }
  return dic;
}

export function IsFoolNum(x:number|string,dic:FoolNumDic):boolean{
  const ddic=defaulter(dic);
  if(ddic.mode.bigData){
    return dic.data[x] ?? false;
  }
  return dic.data[x];
}

function defaulter(dic: FoolNumDic): NoNullDic {
  return {
    ...dic,
    mode: {
      string: dic.mode?.string ?? false,
      bigData: dic.mode?.bigData ?? false
    }
  };
}
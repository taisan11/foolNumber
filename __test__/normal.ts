import { assertEquals } from "@std/assert";
import { IsFoolNum,CreateFoolNumDic, type FoolNumDic } from "../mod.ts";

Deno.test(function FT() {
    const dict:FoolNumDic = {
      mode:{
        string: false,
        bigData: false
      },
      data:{
        0: true,
        1: false,
        2: true,
        3: false,
        4: true,
        5: false,
        6: true,
        7: false,
        8: true,
        9: false,
      }
    }
    assertEquals(CreateFoolNumDic((n)=>{
      n = Number(n);
      return n % 2 === 0;
    },{maxNum:9}), dict);
  });
  Deno.test(function FT2() {
    const dict:FoolNumDic = {
      mode:{
        string: false,
        bigData: false
      },
      data:{
        0: true,
        1: false,
        2: true,
        3: false,
        4: true,
        5: false,
        6: true,
        7: false,
        8: true,
        9: false,
      }
    }
    assertEquals(IsFoolNum(2,dict), true);
  })
  Deno.test(function FT3() {
    const dict:FoolNumDic = {
      mode:{
        string: false,
        bigData: false
      },
      data:{
        0: true,
        1: false,
        2: true,
        3: false,
        4: true,
        5: false,
        6: true,
        7: false,
        8: true,
        9: false,
      }
    }
    assertEquals(IsFoolNum(10,dict), undefined);
  })
  
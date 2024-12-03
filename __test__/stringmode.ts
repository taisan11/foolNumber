import { assertEquals } from "@std/assert";
import { IsFoolNum,CreateFoolNumDic, type FoolNumDic } from "../mod.ts";

Deno.test(function FTSt() {
    const dict:FoolNumDic = {
      mode:{
        string: true,
        bigData: false
      },
      data:{
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true,
        "h": false,
        "i": true,
        "j": false,
      }
    }
    const list = ["a","b","c","d","e","f","g","h","i","j"];
    assertEquals(CreateFoolNumDic((n)=>{
      if(n == "a" || n == "c" || n == "e" || n == "g" || n == "i"){return true;}else{return false;}
    },{maxNum:9,mode:{string:true},list}), dict);
  })
  Deno.test(function FTSt2() {
    const dict:FoolNumDic = {
      mode:{
        string: true,
        bigData: false
      },
      data:{
        "a": true,
        "b": false,
        "c": true,
        "d": false,
        "e": true,
        "f": false,
        "g": true,
        "h": false,
        "i": true,
        "j": false,
      }
    }
    assertEquals(IsFoolNum("c",dict), true);
  })
  
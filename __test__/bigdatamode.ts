import { assertEquals } from "@std/assert";
import { IsFoolNum,CreateFoolNumDic, type FoolNumDic } from "../mod.ts";

Deno.test(function FTBg() {
  const dict:FoolNumDic = {
    mode:{
      string: true,
      bigData: true
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
  assertEquals(IsFoolNum("k",dict), false);
  assertEquals(IsFoolNum("c",dict), true);
})
Deno.test(function FTBg3() {
    const dict:FoolNumDic = {
        mode:{
        string: true,
        bigData: true
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
    },{maxNum:9,mode:{string:true,bigData:true},list}), dict);
})
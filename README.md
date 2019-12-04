# RN-Start
这是一个基础的RN项目测试

#### 错误
Unknown argument type '__attribute__' in method -[RCTAppState getCurrentAppState:error:]. Extend RCTConvert to support this type.

修改 react-native/React/Base/RCTModuleMethod.mm
line94: RCTReadString(input, "__attribute__((__unused__))") ||
const functions = {
  getAge: (name: string, age: number) => `${name} is ${age} years old`,
  add: (num1: number, num2: number) => num1 + num2,
  isNull: () => null,
  isUndefined: () => undefined,
  compileAndroidCode: () => {
    throw new Error('you are using the wrong JDK!')
  }
}

export default functions
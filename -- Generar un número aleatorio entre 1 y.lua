-- Generar un número aleatorio entre 1 y 100
local numeroSecreto = math.random(1, 100)
local intentos = 0
local adivinado = false

print("¡Bienvenido al juego de adivinar el número!")

while not adivinado do
  -- Leer el número ingresado por el usuario
  io.write("Ingresa un número: ")
  local numero = tonumber(io.read())

  -- Incrementar el contador de intentos
  intentos = intentos + 1

  -- Comparar el número ingresado con el número secreto
  if numero == numeroSecreto then
    adivinado = true
    print("¡Felicidades! Adivinaste el número en " .. intentos .. " intentos.")
  elseif numero < numeroSecreto then
    print("El número ingresado es demasiado bajo. Intenta nuevamente.")
  else
    print("El número ingresado es demasiado alto. Intenta nuevamente.")
  end
end
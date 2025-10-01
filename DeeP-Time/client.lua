-- DeeP code
RegisterCommand("DeeP-showtime", function()
    SetNuiFocus(false, false)
    SendNUIMessage({ action = "DeeP-show" })
end)


RegisterNUICallback("DeeP-show", function(data, cb)
    print("DeeP UI activated")
    cb("ok")
end)

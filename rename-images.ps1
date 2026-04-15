# Script to rename image files and remove Vietnamese diacritics and spaces

$assetsPath = "D:\MLN131\socialist-transitions-76de9ced\public\assets"

$renameMap = @{
    "Ba Na.avif" = "BaNa.avif"
    "Bru-Vân Kiều.avif" = "BruVanKieu.avif"
    "BốY.avif" = "BoY.avif"
    "Chu Ru.avif" = "ChuRu.avif"
    "Chăm.avif" = "Cham.avif"
    "Chơ Ro.avif" = "ChoRo.avif"
    "Chứt.avif" = "Chut.avif"
    "Cơ Ho.avif" = "CoHo.avif"
    "Cơ Tu.avif" = "CoTu.avif"
    "Cống.avif" = "Cong.avif"
    "Cờ Lao.avif" = "CoLao.avif"
    "Gia Rai.avif" = "GiaRai.avif"
    "Giáy.avif" = "Giay.avif"
    "Gié-Triêng.avif" = "GieTrieng.avif"
    "Hrê.avif" = "Hre.avif"
    "Hà Nhì.avif" = "HaNhi.avif"
    "Kháng.avif" = "Khang.avif"
    "Khơ Mú.avif" = "KhoMu.avif"
    "La Chí.avif" = "LaChi.avif"
    "La Ha.avif" = "LaHa.avif"
    "La Hủ.avif" = "LaHu.avif"
    "Lào.avif" = "Lao.avif"
    "Lô Lô.avif" = "LoLo.avif"
    "Lự.avif" = "Lu.avif"
    "M'nông.avif" = "Mnong.avif"
    "Mông.avif" = "Mong.avif"
    "Mường.avif" = "Muong.avif"
    "Mạ.avif" = "Ma.avif"
    "Mảng.avif" = "Mang.avif"
    "Ngái.avif" = "Ngai.avif"
    "Nùng.avif" = "Nung.avif"
    "Phù Lá.avif" = "PhuLa.avif"
    "Pu Péo.avif" = "PuPeo.avif"
    "Pà Thẻn.avif" = "PaThen.avif"
    "Ra Glai.avif" = "RaGlai.avif"
    "Rơ Măm.avif" = "RoMam.avif"
    "Si La.avif" = "SiLa.avif"
    "Sán Chay.avif" = "SanChay.avif"
    "Sán Dìu.avif" = "SanDiu.avif"
    "Thái.avif" = "Thai.avif"
    "Thổ.avif" = "Tho.avif"
    "Tà Ôi.avif" = "TaOi.avif"
    "Tày.avif" = "Tay.avif"
    "Xinh Mun.avif" = "XinhMun.avif"
    "Xtiêng.avif" = "Xtieng.avif"
    "Xơ Đăng.avif" = "XoDang.avif"
    "Ê Đê.avif" = "EDe.avif"
    "Ơ Đu.avif" = "ODu.avif"
}

# Perform renaming
foreach ($oldName in $renameMap.Keys) {
    $oldPath = Join-Path $assetsPath $oldName
    $newName = $renameMap[$oldName]
    $newPath = Join-Path $assetsPath $newName
    
    if (Test-Path $oldPath) {
        Rename-Item -Path $oldPath -NewName $newName -Force
        Write-Host "Renamed: $oldName -> $newName"
    } else {
        Write-Host "File not found: $oldName"
    }
}

Write-Host "Renaming complete!"

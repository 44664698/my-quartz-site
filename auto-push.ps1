# auto-push.ps1
$maxRetries = 20        # 最大重试次数
$retryDelay = 10        # 每次重试间隔（秒）
$attempt = 0

while ($attempt -lt $maxRetries) {
    $attempt++
    Write-Host "=== 尝试推送 (第 $attempt 次) ===" -ForegroundColor Cyan
    git push
    if ($LASTEXITCODE -eq 0) {
        Write-Host "推送成功！" -ForegroundColor Green
        break
    }
    if ($attempt -lt $maxRetries) {
        Write-Host "推送失败，$retryDelay 秒后重试..." -ForegroundColor Yellow
        Start-Sleep -Seconds $retryDelay
    } else {
        Write-Host "已达到最大重试次数 ($maxRetries)，推送失败。" -ForegroundColor Red
    }
}